FROM node:22-slim

<<<<<<< HEAD
# Install git
RUN apt-get update && apt-get install -y git
# Clone the repository
RUN git clone https://github.com/barismutluu/Portfolio

# Install the dependencies
WORKDIR /PortfolioTS
RUN npm install

# Expose the port
EXPOSE 5173

# Start the server
CMD ["npm", "run", "dev"]

=======
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
>>>>>>> master
