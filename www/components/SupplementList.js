import React from "react";

function SupplementList({ supplements }) {
  return (
    <ul className="SupplementList">
      {supplements.map(supplement => (
        <li key={supplement.id}>
          <a
            href={supplement.link}
            className="SupplementListItem SupplementPhoto"
          >
            <img src={supplement.photo} alt={supplement.name} />
          </a>

          <div className="SupplementListItem SupplementText">
            <a href={supplement.link} className="name">
              <h2>{supplement.name}</h2>
            </a>
          </div>
        </li>
      ))}

      <style jsx>{`
        .SupplementList {
          list-style: none;
          max-width: 800px;
          margin: 0 auto;
        }
        .SupplementList li {
            display: flex;
            flex-wrap: nowrap;
        }
        .SupplementListItem {
          display flex;
        }
        .SupplementPhoto {
            margin-right: 40px;
            width: 80px;
        }
        .SupplementPhoto img {}
        .name {
            text-decoration: none;
        }
      `}</style>
    </ul>
  );
}

export default SupplementList;
