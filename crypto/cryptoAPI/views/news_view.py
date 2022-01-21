from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from cryptoAPI.utils import scrape
from cryptoAPI.serializers import NewsSerializer


class NewsList(APIView):
    def get(self, request, *args, **kwargs):
        news_list = scrape.Scrape().scrape_news()
        return Response(status=200, data=NewsSerializer(news_list, many=True).data)
