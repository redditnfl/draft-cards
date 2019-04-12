# vim: set fileencoding=UTF-8 :
# Copyright 2013 AJJ <http://stackoverflow.com/users/377917/ajj>
# Copyright 2017 Jonas Häggqvist
#
# http://stackoverflow.com/a/16663809
#
# Licensed under cc by-sa 3.0
from django import http


class AJAXListMixin(object):

    def dispatch(self, request, *args, **kwargs):
         if not request.is_ajax():
             raise http.Http400("This is an ajax view, friend.")
         return super(AJAXListMixin, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
         return super(AJAXListMixin, self).get_queryset().values()

    def get(self, request, *args, **kwargs):
         # I'm just assuming context_object_name is set. It works out, but...
         return http.JsonResponse({self.get_context_object_name(self.model): list(self.get_queryset().values())})

class AJAXSingleObjectMixin(object):

    def dispatch(self, request, *args, **kwargs):
        if not request.is_ajax():
            raise http.Http400("This is an ajax view, friend.")
        return super(AJAXSingleObjectMixin, self).dispatch(request, *args, **kwargs)

    def get_queryset(self):
         return super(AJAXSingleObjectMixin, self).get_queryset().values()

    def get(self, request, *args, **kwargs):
        obj = self.get_object()
        return http.JsonResponse({self.get_context_object_name(obj): obj})
