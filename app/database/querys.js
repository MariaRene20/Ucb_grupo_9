export const queries =
{
    getAllPatients: 
    'SELECT * FROM Patient',
    addNewPatient: 
    'INSERT INTO Patient (id, name, age, address, condition) VALUES (@id, @name, @age, @address, @condition)',
    getPatientById: 
    'SELECT * FROM Patient Where id = @id',
    deleteProduct: 
    "DELETE FROM [Consultados].[dbo].[Patient] WHERE id = @id",
    getTotalPatients: 
    "SELECT COUNT (*) FROM Patient",
    updatePatientsById: 
    "UPDATE Patient SET name = @name, age = @age, address = @address, condition = @condition WHERE id = @id",

    getAllDoctors:
    "SELECT * FROM doctors",
    addNewDoctor: 
    "INSERT INTO doctors (id, name, age, address, emalAddress, specialty) VALUES (@id, @name, @age, @address, @emalAddress, @specialty)",
    getDoctorById:
    "SELECT * FROM doctors Where id = @id",
    deleteDoctorById:
    "DELETE FROM [Consultados].[dbo].[doctors] WHERE id = @id",
    getTotalDoctors:
    "SELECT COUNT (*) FROM doctors",
    updateDoctorById:
    "UPDATE doctors SET name = @name, age = @age, address = @address, emalAddress = @emalAddress, specialty = @specialty, WHERE id = @id",

    getAllConsulta:
    "SELECT * FROM consulta",
    addNewConsulta:
    "INSERT INTO consulta (id_consulta, id_patient, id_doctor, n_consultorio, patient_condition) VALUES (@id_consulta, @id_patient, @id_doctor, @n_consultorio, @patient_condition)",
    getConsultaById:
    "SELECT * FROM consulta Where id_consulta = @id",
    deleteConsultaById:
    "DELETE FROM [Consultados].[dbo].[consulta] WHERE id_consulta = @id",
    getTotalConsulta:
    "SELECT COUNT (*) FROM consulta",
    updateConsultaById:
    "UPDATE doctors SET id_patient = @id_patient, id_doctor = @id_doctor, n_consultorio = @n_consultorio, patient_condition = @patient_condition WHERE id_consulta = @id",

    getAllEnfermero:
    'SELECT * FROM enfermero',
    addNewEnfermero:
    'INSERT INTO enfermero (id_enfermero, id_patient, id_doctor, n_quirofano, fecha_hora, patient_condition, nombre, edad, correo_electronico) VALUES (@id_enfermero, @id_patient, @id_doctor, @n_quirofano, @fecha_hora, @patient_condition, @nombre, @edad, @correo_electronico)',
    getEnfermeroById:
    'SELECT * FROM enfermero WHERE id_enfermero = @id',
    deleteEnfermeroById:
    'DELETE FROM [Consultados].[dbo].[enfermero] WHERE id_enfermero = @id',
    getTotalEnfermero:
    'SELECT COUNT (*) FROM enfermero',
    updateEnfermeroById:
    'UPDATE enfermero SET id_patient = @id_patient, id_doctor = @id_doctor, n_quirofano = @n_quirofano, fecha_hora = @fecha_hora, patient_condition = @patient_condition, nombre = @nombre, edad = @edad, correo_electronico = @correo_electronico WHERE id_enfermero = @id',

    getAllAmbulancia:
    'SELECT * FROM ambulancia',
  addNewAmbulancia:
    'INSERT INTO ambulancia (id_ambulancia, id_patient, id_enfermero, direccion, hospital) VALUES (@id_ambulancia, @id_patient, @id_enfermero, @direccion, @hospital)',
  getAmbulanciaById:
    'SELECT * FROM ambulancia WHERE id_ambulancia = @id',
  deleteAmbulanciaById:
    'DELETE FROM [Consultados].[dbo].[ambulancia] WHERE id_ambulancia = @id',
  getTotalAmbulancia:
    'SELECT COUNT (*) FROM ambulancia',
  updateAmbulanciaById:
    'UPDATE ambulancia SET id_patient = @id_patient, id_enfermero = @id_enfermero, direccion = @direccion, hospital = @hospital WHERE id_ambulancia = @id',

    getAllHospital: 
    "SELECT * FROM hospital",

    addNewHospital:
    "INSERT INTO hospital (id_hospital, nombre, direccion, telefono) VALUES (@id_hospital, @nombre, @direccion, @telefono)",

    getHospitalById: 
    "SELECT * FROM hospital WHERE id_hospital = @id",

    deleteHospitalById:
    "DELETE FROM hospital WHERE id_hospital = @id",

    getTotalHospital:
    "SELECT COUNT(*) FROM hospital",

    updateHospitalById: 
"UPDATE hospital SET nombre = @nombre, direccion = @direccion, telefono = @telefono WHERE id_hospital = @id"

}