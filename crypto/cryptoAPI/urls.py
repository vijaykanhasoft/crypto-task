from django.conf.urls import url
from cryptoAPI.views import news_view, ethereum_view

urlpatterns = [
    # settings
    url(r"^news/$", news_view.NewsList.as_view()),
    url(r"^ethereum/price/$", ethereum_view.EthereumPrice.as_view()),
]
