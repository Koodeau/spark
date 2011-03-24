from django.conf.urls.defaults import patterns, url

from spark.views import redirect_to
from . import views

urlpatterns = patterns('',
    url(r'^$', redirect_to, {'url': 'desktop.home'}),
    url(r'^home$', views.home, name='desktop.home'),
    url(r'^user/(?P<username>[\w.@+-]+)$', views.user, name='desktop.user'),
    url(r'^global$', views.visualization, name='desktop.visualization'),
    url(r'^close$', views.close, name='desktop.close_popup'),
    
    ### Temporary - Generate stage fake history
    url(r'^generate$', views.generate_history, name='desktop.generate'),
    url(r'^trigger/(?P<username>[\w.@+-]+)$', views.trigger_challenges, name='desktop.trigger')
)