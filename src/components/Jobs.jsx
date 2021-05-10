import React from 'react';

export class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [
          {name: 'Frontend JS', company: 'ABC', city: 'La Rioja', country: 'Argentina' },
          {name: 'Frontend React', company: 'DEF', city: 'Cordoba', country: 'Argentina' },
          {name: 'Frontend Angular', company: 'GHI', city: 'Madrid', country: 'España' }
         ],
      newJob: {
          name:'',
          company:'',
          city:'',
          country:''
      }
    };
  }

  addJob = () => {
      this.setState({
          jobs: [...this.state.jobs, this.state.newJob] 
      });
  }

  handleNewJobName = (evt) => {
    this.setState(prevState => ({
            newJob: {
                ...prevState.newJob,
                name: evt.target.value
            }
        })
    );
  }

  handleNewJobCompany = (evt) => {
    this.setState(prevState => ({
            newJob: {
                ...prevState.newJob,
                company: evt.target.value
            }
        })
    );
  }

  handleNewJobCity = (evt) => {
    this.setState(prevState => ({
            newJob: {
                ...prevState.newJob,
                city: evt.target.value
            }
        })
    );
  }

  handleNewJobCountry = (evt) => {
    this.setState(prevState => ({
            newJob: {
                ...prevState.newJob,
                country: evt.target.value
            }
        })
    );
  }

  deleteJob = (id) => {
      this.setState({
          jobs: this.state.jobs.filter((job, idx) => idx !== id)
      })
  }

  render() {
    return (
        <div>
            <label>Nombre</label><br />
            <input type="text" value={this.state.newJob.name}
            onChange={(e) => this.handleNewJobName(e)}></input><br />
             <label>Empresa</label><br />
            <input type="text" value={this.state.newJob.company}
            onChange={(e) => this.handleNewJobCompany(e)}></input><br />
             <label>Ciudad</label><br />
            <input type="text" value={this.state.newJob.city}
            onChange={(e) => this.handleNewJobCity(e)}></input><br />
             <label>Pais</label><br />
            <input type="text" value={this.state.newJob.country}
            onChange={(e) => this.handleNewJobCountry(e)}></input><br />

            <button onClick={this.addJob}>Agregar</button>
            <ul>
                {this.state.jobs.map((elem, idx) =>
                {return <li key={idx}>
                    <h3>{elem.name}</h3>
                    <p>{elem.company}</p>
                    <p>{elem.city}</p>
                    <p>{elem.country}</p>
                    <button onClick={() => this.deleteJob(idx)}>Eliminar</button>
                </li>})}
            </ul>
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}
