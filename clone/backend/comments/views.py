from rest_framework import status
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from comments.models import Comment 
from comments.serializers import CommentSerializer
from django.core.exceptions import ObjectDoesNotExist


@api_view(["GET"])
@permission_classes([AllowAny])
## GET comment function (unprotected)
def get_comments(request, video_id):
    try:
        comments = Comment.objects.filter(video_id=video_id)
    except ObjectDoesNotExist:
        return Response({"error": "No comments exist with given Video_Id"})
    
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

# POST new comment function (protected)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
