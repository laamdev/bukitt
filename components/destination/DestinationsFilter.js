export default function DestinationsFilter({
  tags,
  handleSort,
  handleTagChange,
  selectedTag,
  // // sortBy,
}) {
  return (
    <div className="grid grid-cols-8 gap-x-12 gap-y-6">
      {tags.map((tag, idx) => (
        <button
          key={idx}
          type="button"
          className={`border border-black rounded-full px-3 py-3 text-xs w-full justify-center ${
            selectedTag === tag.name ? '' : 'btn-outline-secondary'
          }`}
          onClick={(e) => handleTagChange(e.target.value)}
          value={tag.name}
        >
          {tag.name}
        </button>
      ))}
      {/* <div>
        <select onChange={(e) => handleSort(e.target.value)} value={sortBy}>
          <option value="">Sort by</option>
          <option value="lowest">Lowest to highest</option>
          <option value="highest">Highest to lowest</option>
        </select>
      </div> */}
    </div>
  );
}
