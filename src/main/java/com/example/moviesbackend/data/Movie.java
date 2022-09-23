package com.example.moviesbackend.data;


import lombok.*;
import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Long directorID;

    @Column(nullable = false)
    private Float genreID;

    @Column(nullable = false)
    private Long score;

    @Column(nullable = false)
    private String plot;

    @Column(nullable = false)
    private Integer ratingID;

    @Column(nullable = false)
    private String poster;

}
