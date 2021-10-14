package co.edu.usa.ciclo3.ciclo3.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.usa.ciclo3.ciclo3.entidades.Cliente;
import co.edu.usa.ciclo3.ciclo3.servicios.ClienteServicio;


@RestController
@RequestMapping("/api/Client")
@CrossOrigin(origins = "*")
public class ClientController {

    @Autowired
    private ClienteServicio clienteServicio;

    @GetMapping("/all")
    public List<Cliente> getClientes(){
        return clienteServicio.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Cliente> getCliente(@PathVariable("id") int id){
        return clienteServicio.getCliente(id);
    }

    @PostMapping("/save")
    public Cliente save(@RequestBody Cliente c){
        return clienteServicio.save(c);
    }
    
}
