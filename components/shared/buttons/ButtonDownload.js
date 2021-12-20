export default function ButtonDownload({ btnLinkText, btnURL }) {
  return (
    <button type="button" className="tw-btn">
      <a href={`${btnURL}?dl=`}>{btnLinkText}</a>
    </button>
  );
}
