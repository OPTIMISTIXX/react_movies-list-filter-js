export const Page = ({ filterBy, query }) => (
  <div className="page">
    <div className="page-content">
      <div className="box">
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={event => filterBy(event.target.value)}
              value={query}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);
