<template>
  <div class="mb-5">
    <b-container class="bv-example-row">
      <b-form @submit="onSubmit">
        <h1 class="my-2">Formulario de registro</h1>
        <b-card>
          <b-row>
            <b-col cols="3">
              <h1>Foto</h1>
              <b-form-group
                id="input-group-1"
                label="Escoge una foto:"
                label-for="input-1"
              >
                <b-form-file
                  id="input-1"
                  v-model="form.photo"
                  accept=".jpg, .jpeg, .png"
                  :state="changephoto"
                          @input="validateImage"
                ></b-form-file>
                <b-form-invalid-feedback tooltip>
                  Recuerda debe pesar 3MB como limíte
                </b-form-invalid-feedback>
              </b-form-group>
              <img
                v-if="form.photo"
                :src="URL.createObjectURL(form.photo)"
                alt="Vista previa"
                style="max-width: 100%; max-height: 200px; margin-top: 10px"
              />
            </b-col>
            <b-col cols="9">
              <b-card
                header="Información personal"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="info"
              >
                <b-card-body>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Nombre:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.name"
                          type="text"
                          :state="changename"
                          @input="validateName"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Recuerda iniciar con mayúscula el nombre, solo se
                          aceptan letras.
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Apellido Paterno:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.surname"
                          type="text"
                          :state="changesurname"
                          @input="validateSurname"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Recuerda iniciar con mayúscula el nombre, solo se
                          aceptan letras.
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Apellido Materno:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.secondSurname"
                          type="text"
                          :state="changesecondSurname"
                          @input="validateScondSurname"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Recuerda iniciar con mayúscula el nombre, solo se
                          aceptan letras.
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Fecha nacimiento:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.birthday"
                          type="date"
                          :state="changebirthday"
                          @input="validateDate"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Recuerda debes tener 18 años o La fecha es invalída
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Correo electrónico:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.email"
                          type="email"
                          :state="changeemail"
                          @input="validateEmail"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Recuerda escribir correctamente el correo
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Teléfono:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.phone"
                          type="number"
                          :state="changephone"
                          @input="validatePhone"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Solo números y el limíte es de 10 digítos
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-card
                class="mb-2 my-3"
                header="Información Dirección"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="warning"
              >
                <b-card-body>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Calle:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.street"
                          type="text"
                          :state="changestreet"
                          @input="validateCalle"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          No se aceptan caracteres especiales
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Ciudad:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.country"
                          type="text"
                          :state="changecountry"
                          @input="validateCiudad"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Recuerda iniciar con mayúscula la ciudad, solo se
                          aceptan letras.
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="CP:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.code"
                          type="number"
                          :state="changecode"
                          @input="validateCP"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Solo números la máxima cantidad es de 5 caracteres
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="input-group-1"
                        label="Número:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.num"
                          type="number"
                          :state="changenum"
                          @input="validateNumero"
                        ></b-form-input>
                        <b-form-invalid-feedback tooltip>
                          Solo se aceptan números máximo 4 carecteres
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </b-col>
            <b-col cols="12" class="text-center my-3">
              <b-button @click="cleanInput()" variant="outline-danger"
                >Limpiar</b-button
              >
              <b-button variant="outline-success" class="mx-4"
                >Registrar</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        surname: "",
        secondSurname: "",
        birthday: "",
        email: "",
        phone: 0,
        address: "",
        street: "",
        code: 0,
        num: 0,
        country: "",
        photo: null,
      },
      btn: false,
      changename: null,
      changesurname: null,
      changesecondSurname: null,
      changebirthday: null,
      changeemail: null,
      changephone: null,
      changeaddress: null,
      changestreet: null,
      changecode: null,
      changenum: null,
      changecountry: null,
      changephoto: null,
    };
  },
  methods: {
    async cleanInput() {
      this.form.name = "";
      this.form.surname = "";
      this.form.secondSurname = "";
      this.form.birthday = "";
      this.form.email = "";
      this.form.phone = 0;
      this.form.address = "";
      this.form.street = "";
      this.form.code = 0;
      this.form.num = 0;
      this.form.country = "";
      this.form.photo = "";
      console.log("entra");
    },
    onSubmit: function (event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    validateName: function (name) {
      var correctName = /^([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúñ]+[\s]?)+$/;
      if (name === null || name === undefined) {
        this.changename = false; // Si el nombre está vacío, se considera incorrecto
      } else {
        this.changename = correctName.test(name.trim()); // Utiliza correctName.test(name)
      }
    },
    validateSurname: function (surname) {
      var correctName = /^([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúñ]+[\s]?)+$/;
      if (surname === null || surname === undefined) {
        this.changesurname = true; // Si el nombre está vacío, se considera incorrecto
      } else {
        this.changesurname = correctName.test(surname.trim()); // Utiliza correctName.test(name)
      }
    },
    validateScondSurname: function (secondsurname) {
      var correctName = /^([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúñ]+[\s]?)+$/;
      return (this.changesecondSurname = correctName.test(
        secondsurname.trim()
      )); // Utiliza correctName.test(name)
    },
    validateDate: function (bth) {
      // Convierte la fecha de nacimiento a un objeto Date
      const birthDate = new Date(bth);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      const isAdult = age >= 18;
      const isPastDate = birthDate <= currentDate;
      this.changebirthday = isAdult && isPastDate;
    },
    validateEmail: function (email) {
      var correct = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === null || email === undefined) {
        this.changeemail = true; // Si el nombre está vacío, se considera incorrecto
      } else {
        this.changeemail = correct.test(email.trim()); // Utiliza correctName.test(name)
      }
    },
    validatePhone: function (number) {
      if (number === null || number === undefined) {
        this.changephone = true; // Tratar número nulo o indefinido como válido
      } else {
        var correct = /^\d{10}$/;
        this.changephone = correct.test(number);
      }
    },

    validateCalle: function (calle) {
      if (calle === null || calle === undefined) {
        this.changestreet = true; // Tratar calle nula o indefinida como válida
      } else {
        var correct = /^[a-zA-Z0-9\s]+$/;
        this.changestreet = correct.test(calle);
      }
    },
    validateCiudad: function (ciudad) {
      if (ciudad === null || ciudad === undefined) {
        this.changecountry = true; // Tratar ciudad nula o indefinida como válida
      } else {
        var correct = /^([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúñ]+[\s]?)+$/;
        this.changecountry = correct.test(ciudad);
      }
    },
    validateCP: function (cp) {
      if (cp === null || cp === undefined) {
        this.changecode = true; // Tratar código postal nulo o indefinido como válido
      } else {
        var correct = /^[a-zA-Z0-9]{5}$/;
        this.changecode = correct.test(cp);
      }
    },
    validateNumero: function (num) {
      if (num === null || num === undefined) {
        this.changenum = true; // Tratar número nulo o indefinido como válido
      } else {
        var correct = /^[a-zA-Z0-9]{1,4}$/;
        this.changenum = correct.test(num);
      }
    },
    validateImage: function (event) {
      const input = event.target;

      if (input.files && input.files[0]) {
        const imageFile = input.files[0];
        const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB

        if (imageFile.size > maxSizeInBytes) {
          this.changephoto = true;
          // Puedes tomar acciones adicionales aquí, como mostrar un mensaje de error
        }
      }
    },
  },
};
</script>

<style></style>
