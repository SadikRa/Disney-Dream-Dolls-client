const Blogs = () => {
  return (
    <div className="my-12 p-12">
      <div className="my-5">
        <h1 className="text-4xl">
          Question:What is an access token and refresh token? How do they work
          and where should we store them on the client-side?
        </h1>
        <p>
          Answer: An access token and refresh token are both used in the context
          of authentication and authorization mechanisms, such as OAuth, to
          ensure secure communication between a client and a server. An access
          token is a credential that represents the authorization granted to the
          client to access specific resources or perform certain actions on
          behalf of a user. It is typically short-lived and has an expiration
          time. The client includes this token in each request to the server to
          prove its identity and gain access to protected resources. The server
          verifies the token authenticity and checks its permissions before
          responding to the client request. On the other hand a refresh token is
          a long-lived credential that is used to obtain a new access token once
          the previous one has expired. It allows the client to request a fresh
          access token without requiring the user to reauthenticate. Refresh
          tokens are securely stored by the client and are typically sent to a
          token endpoint provided by the authentication server in exchange for a
          new access token. When it comes to storing access tokens and refresh
          tokens on the client-side, security is crucial. It is generally
          recommended to store them in a secure and tamper-proof manner to
          prevent unauthorized access. Here are a few common approaches.
        </p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl">Question:Compare SQL and NoSQL databases?</h1>
        <p>
          Answer: SQL databases are vertically scalable, while NoSQL databases
          are horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl">
          Question:What is express js? What is Nest JS?
        </h1>
        <p>
          Answer: Express is a minimalist and flexible framework that is easy to
          use and has a large community of developers. NestJS, on the other
          hand, is a newer framework that provides additional features such as
          dependency injection, a modular architecture, and an intuitive CLI.
        </p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl">
          Question:What is MongoDB aggregate and how does it work?
        </h1>
        <p>
          Answer:Aggregation is a way of
          processing a large number of documents in a collection by means of
          passing them through different stages. The stages make up what is
          known as a pipeline. The stages in a pipeline can filter, sort, group,
          reshape and modify documents that pass through the pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
