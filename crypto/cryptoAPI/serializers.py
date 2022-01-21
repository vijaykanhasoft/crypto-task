from rest_framework import serializers


class NewsSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()
