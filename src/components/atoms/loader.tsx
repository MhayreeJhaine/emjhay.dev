const Loader = () => {
  return (
    <>
      <style>
        {`

.loader {
  width: 60px;
  aspect-ratio: 4;
  --c:#C0C0C0 90%,#0000;
  background: 
    radial-gradient(circle closest-side at left  6px top 50%,var(--c)),
    radial-gradient(circle closest-side                     ,var(--c)),
    radial-gradient(circle closest-side at right 6px top 50%,var(--c));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: l4 1s infinite alternate;
}
@keyframes l4 {
    to{width:25px;aspect-ratio: 1}
}
        `}
      </style>
      <div className="loader" />
    </>
  );
};

export default Loader;
