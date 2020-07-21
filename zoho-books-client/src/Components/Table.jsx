import React,{ useState,useEffect} from 'react';
import axios from 'axios'

const Table = () => {
    const [tableData,setTableData]= useState([])

    useEffect(()=>{
        const  fetchData = () =>{
            axios.get('https://zoho-books-node.herokuapp.com/api/contacts')
                .then((data) => {
                    setTableData(data) 
                    console.log(data) })
                .catch( err => console.log(err))
        }
        fetchData()
    },[])



    return (
        <React.Fragment>
            <table className="table mt-2 table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Name</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">GST Treatment</th>
                    <th scope="col">Receivables</th>
                    <th scope="col">Payables</th>
                    </tr>
                </thead>
                <tbody >
                    {tableData.data && tableData.data.contacts.map((element,i)=>{
                        return(
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{element.contact_name}</td>
                            <td>{element.company_name}</td>
                            <td>{element.email?element.email:'-'}</td>
                            <td>{element.mobile?element.mobile:'-'}</td>
                            <td>{element.gst_treatment?element.gst_treatment:'-'}</td>
                            <td> &#8377;{element.outstanding_receivable_amount}</td>
                            <td> &#8377;{element.outstanding_payable_amount}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Table;
