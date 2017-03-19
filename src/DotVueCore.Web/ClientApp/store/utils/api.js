import Vue from 'vue'

export default {
    get(url, request,cb,er) {
        return Vue.http.get(url, request)
            .then((response) => {
                cb(response.data)
            })
            .catch((error) => {
                er(error)
            });
    },
    post(url, request,cb,er) {
        return Vue.http.post(url, request)
          .then((response) => {
              cb(response.data)
          })
          .catch((error) => {
              er(error)
          });
    },
    patch(url, request,cb,er) {
        return Vue.http.patch(url, request)
          .then((response) => {
              cb(response.data)
          })
          .catch((error) => {
              er(error)
          });
    },
    delete(url, request,cb,er) {
        return Vue.http.delete(url, request)
          .then((response) => {
              cb(response.data)
          })
          .catch((error) => {
              er(error)
          });
    }
}
