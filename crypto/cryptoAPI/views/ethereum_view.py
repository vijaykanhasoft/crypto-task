from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from cryptoAPI.utils import scrape
from cryptoAPI.serializers import NewsSerializer


class EthereumPrice(APIView):
    def get(self, request, *args, **kwargs):
        ethereum_price = scrape.Scrape().scrape_ethereum_price()
        return Response(status=200, data={"price": ethereum_price})
