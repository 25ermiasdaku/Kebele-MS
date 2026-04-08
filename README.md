# Ethiopian Kebele Management System

## Run with Docker
```bash
docker-compose up -d --build













kebele_management/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env
│   ├── kebele_api/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── celery.py
│   ├── apps/
│   │   ├── authentication/
│   │   ├── residents/
│   │   ├── clerks/
│   │   ├── admin_panel/
│   │   ├── services/
│   │   ├── documents/
│   │   ├── payments/
│   │   ├── infrastructure/
│   │   ├── business/
│   │   ├── police/
│   │   ├── analytics/
│   │   ├── ai_assistant/
│   │   ├── notifications/
│   │   └── public_website/
│   └── templates/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── database/
│   ├── schema.sql
│   └── seed.sql
├── docker-compose.yml
└── README.md
