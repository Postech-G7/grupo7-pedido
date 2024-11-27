FROM node:20
WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json .
COPY src ./src
RUN npm install -g pnpm
RUN pnpm install
ENV PORT=31302
ENV DATABASE_URL=mongodb+srv://application:jYbyiomDDLLy80yX@clusterrf.dlehi.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRF
ENV MERCADOPAGO_URL=https://api.mercadopago.com
ENV MERCADOPAGO_USERID=140225549
ENV MERCADOPAGO_TOKEN=TEST-6171745819014663-071918-e3d8f1680321deab4a8c0e430c211de3-140225549
ENV MERCADOPAGO_POS=2797
ENV MERCADOPAGO_WEBHOOK_URL=https://webhook.site/b19c73a2-d53c-445f-9ccb-4289685a38c1
ENV SERVICE_ACCOUNT={}

EXPOSE 31302
CMD [ "pnpm", "start"]