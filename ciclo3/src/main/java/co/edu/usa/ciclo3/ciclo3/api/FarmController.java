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

import co.edu.usa.ciclo3.ciclo3.entidades.Finca;
import co.edu.usa.ciclo3.ciclo3.servicios.FincaServicio;

@RestController
@RequestMapping("/api/Farm")
@CrossOrigin(origins = "*")

public class FarmController {

    @Autowired
    private FincaServicio finciaServicio;

    @GetMapping("/all")
    public List<Finca> getFincas(){
        return finciaServicio.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Finca> getCFinca(@PathVariable("id") int id){
        return finciaServicio.getFinca(id);
    }

    @PostMapping("/save")
    public Finca save(@RequestBody Finca f){
        return finciaServicio.save(f);
    }
    
}
