const validate = () => {
  const { name, email, phone, message } = document.contactform;

  console.log(email, name);

  if (!name.value) {
    alert('O campo nome é obrigatório');
    name.focus();
    return false;
  }

  if (!email.value) {
    alert('O campo email é obrigatório');
    email.focus();
    return false;
  }

  if (email.value.indexOf('@') === -1) {
    alert(`${email.value} não é um email válido. Faltando '@'`);
    email.focus();
    return false;
  }
  if (email.value.indexOf('.') === -1) {
    alert(`${email.value} não é um email válido. Faltando '.'`);
    email.focus();
    return false;
  }

  if (message.value.length < 20) {
    alert('O campo mensagem deve ter no mínimo 20 caracteres.');
    message.focus();
    return false;
  }
};
