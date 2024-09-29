# nodejs-typescript

```$
git clone https://github.com/myrepos <new-folder-name>

```

```$
nodejs-typescript-server/
├── src/
│   ├── _data/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── .env
│   └── server.ts
├── test/
│   ├── integration/
│   └── unit/
├── .gitignore
├── Dockerfile
├── package-lock.json
├── package.json
└── tsconfig.json
README.md
```

tsconfig.json:
{
  "compilerOptions": {
    // ... other options ...
    "types": ["node"]
  }
}


```$
    npm install --save-dev ts-node-dev
    npm install -g ts-node
    npm install --save-dev @types/body-parser
    npm install --save-dev @types/express
```
