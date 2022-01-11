export default function ButtonDownload({ btnLinkText, btnURL }) {
  return (
    <button type="button" className="tw-btn bg-brand hover:bg-transparent">
      <a href={`${btnURL}?dl=`}>{btnLinkText}</a>
    </button>
  );
}
