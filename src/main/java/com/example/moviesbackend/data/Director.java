package com.example.moviesbackend.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="director")
public class Director {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long directorID;

//    @Column(nullable = false)
//    private String first_name;
//
//    @Column(nullable = false)
//    private String last_name;

    @OneToMany(mappedBy = "title")
    @JsonIgnoreProperties("author")
    private Collection<Movie> movies;
}