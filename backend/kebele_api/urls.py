from django.urls import path, include

urlpatterns = [
    path('api/auth/', include('apps.authentication.urls')),
    path('api/residents/', include('apps.residents.urls')),
    path('api/clerks/', include('apps.clerks.urls')),
    path('api/admin/', include('apps.admin_panel.urls')),
    path('api/services/', include('apps.services.urls')),
    path('api/documents/', include('apps.documents.urls')),
    path('api/payments/', include('apps.payments.urls')),
    path('api/gis/', include('apps.infrastructure.urls')),
    path('api/analytics/', include('apps.analytics.urls')),
    path('api/ai/', include('apps.ai_assistant.urls')),
]
