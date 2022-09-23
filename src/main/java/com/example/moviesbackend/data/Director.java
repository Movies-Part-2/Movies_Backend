package com.example.moviesbackend.data;

import lombok.*;
import javax.persistence.*;

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

    @Column(nullable = false)
    private String first_name;

    @Column(nullable = false)
    private String last_name;

}