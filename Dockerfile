FROM node:22-slim

# Install git
RUN apt-get update && apt-get install -y git
# Clone the repository
RUN git clone https://github.com/gorbadil/PortfolioTS

# Install the dependencies
WORKDIR /PortfolioTS
RUN npm install

# Expose the port
EXPOSE 5173

# Start the server
CMD ["npm", "run", "dev"]

