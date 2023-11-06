# Target-Disease-Association
A React app that renders and visualizes unique target-disease pairs that are supported by one or more pieces of evidence  that connect the two entities. 

# How to install

- - git clone the project, then ```yarn ``` after this ```yarn dev``` to start the project.

# Folder Structure
- There are five major folders that form the structure of this application, ``` ApolloClient ``` houses the client.ts file where it is set up for interacting with a GraphQL API. It creates an `HttpLink` to connect to the specified GraphQL endpoint (`https://api.platform.opentargets.org/api/v4/graphql`). The client is configured to use an `InMemoryCache` for caching query results. The client is then exported for use in other parts of the application.
- The ``` Charts ``` folder has both Bar and Radar Charts that are used to visualise the data.
- The ``` Components ``` folder houses the data table that is used to render the data in tabular form and alsp a chart tab that is used to view both charts.

- There is a ``` services  ``` that houses the query used to access the graphql api.
- Also there is a ``` codegen ``` in simple terms what it does is that, It creates code to fetch data from a GraphQL API, makes sure the data types in the code match with the API and checks queries to prevent errors.