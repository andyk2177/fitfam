import Meta from "./Meta";

export default ({ children }) => (
  <div>
    <Meta />
    <div className="Header">💪</div>
    {children}

    <style jsx>{`
      .Header {
        font-size: 34px;
        padding: 8px 18px;
      }
    `}</style>
  </div>
);
