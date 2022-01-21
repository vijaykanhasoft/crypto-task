from bs4 import BeautifulSoup
from urllib.request import urlopen, Request


class Scrape:
    def __init__(self):
        pass

    def scrape_news(self):
        news_list = []
        try:
            req = Request(
                "https://www.theblockcrypto.com/", headers={"User-Agent": "Mozilla/5.0"}
            )
            html = urlopen(req).read()
            bs = BeautifulSoup(html, "html.parser")

            storyfeed = bs.find("div", class_="storyFeed").find_all("article")
            for story in storyfeed:
                title = story.find("div", class_="align-items-start").h3.text
                description = story.find("div", class_="align-items-start").div.text
                news_list.append({"title": title, "description": description})
            return news_list
        except Exception as e:
            return news_list

    def scrape_ethereum_price(self):
        try:
            req = Request(
                "https://www.coingecko.com",
                headers={
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
                },
            )
            html = urlopen(req).read()
            bs = BeautifulSoup(html, "html.parser")

            crypto_currency = bs.find(attrs={"data-text": "Ethereum"}).parent
            price = crypto_currency.find("td", class_="price").span.text
            return price
        except Exception as e:
            return ""
