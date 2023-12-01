const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("reserva-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = e.target.children.user.value;
    const sexo = e.target.children.sexo.value;
    const telefono = e.target.children.telefono.value;
    const email = e.target.children.email.value;
    const fecha = e.target.children.fecha.value;

    const res = await fetch("http://localhost:4000/api/reserva", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user,
            sexo,
            telefono,
            email,
            fecha,
        }),
    });

    if (!res.ok) return mensajeError.classList.toggle("escondido", false);

    const resJson = await res.json();

    if (resJson.redirect) {
        window.location.href = resJson.redirect;
    }
});
