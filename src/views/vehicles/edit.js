import React, { useState } from 'react'
import { store, show, change, cep } from '../../store/actions/vehicles.action'
import { CircularProgress, TextField, Select, MenuItem, InputAdornment } from '@material-ui/core'
import Header from '../header'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/Inputs/Input'

export default function VehicleEdit(props) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.vehiclesReducer)

  const [state, setState] = useState({
      isLoading: true,
      isLoadingCep: false,
      isDeleted: null,
      redirect: false,
      tips: 0,
      confirmEl: null,
      vehicle_id: (props.match.params.id) ? props.match.params.id : null
  })

  React.useEffect(() => {
      index();
  })
  
  const index = () => {
      if(state.vehicle_id) {
          dispatch(show(state.vehicle_id)).then(res => {
              if(res) {
                  setState({isLoading: false})
              }
          })
      }else{
          dispatch(store()).then(res => {
              if(res) {
                  setState({isLoading: false})
              }
          })
      }
  }

  return (
      <>
          <Header title="Veiculos - gestão" />

          <div className="container mt-4 pt-3">
              {(state.isLoading) ? <div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress/> </div> :
              
                  <div className="row">
                      <div className="col-md-7">
                          <h3 className="font-weight-normal mb-4">Localização do Veiculo</h3>

                          <div className="card card-body">
                              <div className="row">
                                  <div className="col-md-7 form-group">
                                      <label className="label-custom">CEP</label>
                                      <TextField 
                                          style={(state.isLoadingCep) ? {opacity: 0.5} : {}}
                                          error={(data.error.zipCode) && true}
                                          type="tel"
                                          InputProps={{
                                              inputComponent: Input,
                                              value: data.vehicle.zipCode,
                                              onChange: text => {
                                                  dispatch( change({ zipCode: text.target.value }) );
                                                  if(text.target.value.length > 8) {
                                                      setState({ isLoadingCep: true })
                                                      dispatch(cep(text.target.value)).then(res => res && setState({isLoadingCep: false}))
                                                      if(data.error.zipCode){
                                                          delete data.error.zipCode;
                                                          delete data.error.uf;
                                                          delete data.error.city;
                                                      }
                                                  }
                                              },
                                              endAdornment: (
                                                  <InputAdornment position="start">
                                                      {(state.isLoadingCep) ? <CircularProgress size={32} /> : <></> }
                                                  </InputAdornment>
                                              )
                                          }}
                                      />
                                      {(data.error.zipCode) &&
                                          <strong className="text-danger">{data.error.zipCode[0]}</strong>
                                      }
                                  </div>
                              </div>

                              <div className="row">
                                  <div className="col-md-9 form-group">
                                      <label className="label-custom">CIDADE</label>
                                      <TextField
                                          error={(data.error.city) && true}
                                          disabled
                                          value={data.vehicle.city}
                                      />
                                      {(data.error.city) &&
                                          <strong className="text-danger">{data.error.city[0]}</strong>
                                      }
                                  </div>
                                  <div className="col-md-3 form-group">
                                      <label className="label-custom">UF</label>
                                      <TextField
                                          error={(data.error.uf) && true}
                                          disabled
                                          value={data.vehicle.uf}
                                      />
                                      {(data.error.uf) &&
                                          <strong className="text-danger">{data.error.uf[0]}</strong>
                                      }
                                  </div>
                              </div>
                          </div>

                          <h3 className="font-weight-normal mt-4 mb-4">Dados do Veiculo</h3>
                          <div className="card card-body">
                              <div className="form-group">
                                  <label className="label-custom">CATEGORIA</label>
                                  <Select
                                      error={data.error.vehicle_type && true}
                                      value={data.vehicle.vehicle_type}
                                      onChange={event => {
                                          
                                      }}
                                  >
                                  {data.vehicle_types.map(item => (
                                      <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                  ))}
                                  </Select>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-5">

                      </div>
                  </div>
              }
          </div>
      </>
  )
}