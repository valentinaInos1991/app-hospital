*Aplicación REACT Hospital Cordis*
------------------------------------------------

1. Manejo de Estado con useState
Se utilizó el hook useState para manejar el estado local del formulario, como el nombre del paciente, la fecha de la cita y el doctor seleccionado.
El estado inicial se establece utilizando un objeto formData que contiene las propiedades:
nombre: Representa el nombre del paciente.
fecha: La fecha seleccionada para la cita.
doctor: El doctor seleccionado inicialmente o ingresado en el formulario.

2. Uso de Props para Valores Dinámicos
El formulario recibe el nombre del doctor como una prop (doctorInicial) desde un componente padre.
Esto permite que el formulario sea reutilizable y que pueda precargar un doctor seleccionado en otra parte de la aplicación.
El valor recibido se establece como estado inicial en el campo "Doctor".

3. Sincronización de Props con useEffect
Para garantizar que el formulario se actualice si el doctor seleccionado cambia en el componente principal, se utilizó el hook useEffect.
Cada vez que la prop doctorInicial cambia, el estado del formulario se sincroniza.

4. Manejo de Eventos en los Inputs
El formulario utiliza la función handleChange para actualizar el estado a medida que el usuario interactúa con los campos del formulario.
Se usa el atributo name en cada <input> para identificar qué campo está siendo modificado y actualizar su valor en el estado.

5. Envío del Formulario
Al enviar el formulario con handleSubmit, se evita el comportamiento predeterminado del navegador utilizando e.preventDefault().
Luego, los datos ingresados se muestran en la consola y se muestra un mensaje de confirmación al usuario con alert.

6. Estructura JSX del Formulario
La interfaz visual se creó utilizando JSX. Cada <label> contiene un <input> correspondiente, y los valores son controlados mediante el estado.
El formulario incluye:
Campo para el Nombre del Paciente (input tipo texto).
Campo para la Fecha de la Cita (input tipo fecha).
Campo para el Doctor (input tipo texto).
Botón de Enviar que dispara el evento onSubmit.

7. Modularidad y Reutilización
El formulario AppointmentForm es un componente modular y reutilizable:
Puede ser utilizado en diferentes secciones de la aplicación.
Acepta datos iniciales mediante props para mejorar la flexibilidad y personalización.
El manejo del estado local garantiza que sea independiente y fácil de integrar con otros componentes.
