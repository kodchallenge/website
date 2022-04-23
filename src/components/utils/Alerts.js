import Swal from "sweetalert2"

export function DeleteAlert(header, text, callBack) {
  Swal.fire({
    title: header + ' silinecektir. Onaylıyor musun?',
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Evet, Sil!',
    cancelButtonText: "Vazgeç"
  }).then((result) => {
    if (result.isConfirmed) {
      if (!!callBack) {
        callBack().then(result => {
          Swal.fire(
            'Silindi!',
            result?.data?.message,
            'success'
          )
        })
      } else {
        return true
      }

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'İptal Edildi',
        header + ' silinmedi',
        'error'
      )
    }
  })
}

export function InfoAlert(header, text, callBack) {
  Swal.fire({
    title: header,
    text: text,
    icon: 'info',
    confirmButtonText: 'Anladım',
  }).then((result) => {
    if (result.isConfirmed) {
      callBack && callBack()
    }
  })
}

export function SuccessAlert({header, text, callBack}) {
  Swal.fire({
    title: header ?? "Başarılı",
    text: text ?? " ",
    icon: 'success',
    confirmButtonText: 'Tamam',
  }).then((result) => {
    if (result.isConfirmed) {
      callBack && callBack()
    }
  })
}
export function ErrorAlert({header, text, callBack}) {
  Swal.fire({
    title: header ?? "Hata",
    text: text ?? "Hata oluştu",
    icon: 'error',
    confirmButtonText: 'Tamam',
  }).then((result) => {
    if (result.isConfirmed) {
      callBack && callBack()
    }
  })
}
export function ServiceMessage(service, options = {
  message: "",
  errorMsg: "Internal Server Error",
  callback: () => {},
  errorCallback: () => {},
}) {
  service()
  .then(result => {
    Swal.fire({title: "Başarılı", text: options.message ?? result.data.message, icon:"success"})
    options.callback && options.callback(result.data)
  })
  .catch(err => {
    Swal.fire({
      title: "Başarısız",
      text: err.response.data.message || options.errorMsg || "Internal server error",
      icon: "error"
    })
    options.errorCallback && options.errorCallback(err.response.data)
  })
}