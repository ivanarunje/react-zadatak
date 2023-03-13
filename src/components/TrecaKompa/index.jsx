const TrecaKompa = ({ children, ime, godine }) => {
  return (
    <div>
      <p>Ovo je {children}</p>
      <p>
        Korisnik {ime} ima {godine} godina!
      </p>
    </div>
  );
};

export default TrecaKompa;
