const equipoTexto = [
    {
        imageUrl: 'https://pbs.twimg.com/media/F3DJ7YLWQAACFWO.jpg',
        nombre: 'Marco Savarino',
        fechaNacimiento: new Date('2003-10-01'),
        posicion: 'CoFundador & Developer',
        urlRedes: 'https://marcosavarin0.github.io'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/b8/9e/f4/b89ef40220de7c7c101b6be31d7b22c4.jpg',
        nombre: 'Francisco Pfeiffer',
        fechaNacimiento: new Date('2004-04-03'),
        posicion: 'CoFundador & Developer',
        urlRedes: 'https://franciscopfeiffer.vercel.app'
    },
    {
        imageUrl: 'https://topceos.net/wp-content/uploads/2017/05/bill-gates.jpeg',
        nombre: 'Facundo Delgado',
        fechaNacimiento: new Date('2003-09-19'),
        posicion: 'CoFundador & CM',
        urlRedes: 'https://www.linkedin.com/in/facundo-delgado-8826bb257/'
    }
];

equipoTexto.forEach((miembro) => {
    const hoy = new Date();
    const edadMilisegundos = hoy - miembro.fechaNacimiento;
    const edadAños = Math.floor(edadMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
    miembro.edad = `${edadAños} años`;
});

export default equipoTexto;
