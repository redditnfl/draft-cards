"""draftcardsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^players$', views.PlayerList.as_view(), name='player-list'),
    url(r'^picks$', views.Picks.as_view(), name='picks'),
    url(r'^update$', views.UpdatePlayers.as_view(), name='update-players'),
    url(r'^preview$', views.PreviewPost.as_view(), name='preview-post'),
    url(r'^player/(?P<pk>[0-9]+)$', views.PlayerDetail.as_view(), name='player-detail'),
    url(r'^cards/(?P<overall>[0-9]+)/(?P<team>[A-Z]{2,3})/(?P<name>[^,]+),(?P<pos>[A-Z34\- ]{1,7}),(?P<college>.*)\.(?P<fmt>html|png)$', views.PlayerCard.as_view(), name='player-card'),
    url(r'^random', views.RandomCard.as_view(), name='random-card'),
    url(r'^submit$', views.SubmitView.as_view(), name='submit-pick'),
    url('^missingphotos', views.MissingPhotos.as_view(), name='missing-photos'),
    url(r'^$', views.IndexView.as_view(), name='index'),
]
