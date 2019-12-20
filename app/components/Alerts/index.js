/**
 *
 * Alerts
 *
 */

import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Alert = withReactContent(Swal)

const CustomAlerts = (props) => {

  Alert.fire({
    icon: props.icon || "error",
    title: props.title || '',
    text: props.text || 'Something went wrong!',
  })

  return <p />
}

export const TimerAlert = (props) => {

  let timerInterval
  Alert.fire({
    title: props.title || 'Wait a momment!',
    html: props.text || 'I will close in <b></b> milliseconds.',
    timer: props.timer || 2000,
    timerProgressBar: true,
    onBeforeOpen: () => {
      Alert.showLoading()
      timerInterval = setInterval(() => {
        Alert.getContent().querySelector('b')
          .textContent = Alert.getTimerLeft()
      }, 100)
    },
    onClose: () => {
      if (props.callback) {
        props.callback;
      }
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (

      result.dismiss === Alert.DismissReason.timer
    ) {

    }
  })

  return <p />
}

export default CustomAlerts;



