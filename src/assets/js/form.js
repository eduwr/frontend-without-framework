const validate = () => {
  const { name, email, phone, message } = document.contactform;

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

(() => {
  function phoneMask(v) {
    let r = v.replace(/\D/g, '');
    r = r.replace(/^0/, '');
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    } else {
      r = r.replace(/^(\d*)/, '($1');
    }
    return r;
  }

  const formatPhone = (phone) => {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');
  };

  const phoneInput = document.querySelector('#phone');
  phoneInput.addEventListener('keyup', (e) => {
    e.target.value = formatPhone(e.target.value);
  });
})();
