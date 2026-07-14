function BookmarkList({
  bookmarks,
  jumpToBookmark,
  deleteBookmark,
  editBookmark,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${mins}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="mt-5">

      <h3 className="mb-3">
        📌 Bookmarks
      </h3>

      {bookmarks.length === 0 ? (
        <div className="alert alert-info">
          No bookmarks added yet.
        </div>
      ) : (
        bookmarks.map((bookmark, index) => (
          <div
            key={bookmark._id}
            className="card shadow-sm mb-3"
          >
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h5 className="mb-1">
                    {bookmark.title ||
                      `Bookmark ${index + 1}`}
                  </h5>

                  <small className="text-muted">
                    Timestamp :
                    {" "}
                    {formatTime(
                      bookmark.timestamp
                    )}
                  </small>

                </div>

                <div>

                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() =>
                      jumpToBookmark(
                        bookmark.timestamp
                      )
                    }
                  >
                    ▶ Resume
                  </button>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      editBookmark(bookmark)
                    }
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteBookmark(
                        bookmark._id
                      )
                    }
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookmarkList;