package com.example.moviesbackend.data;


import lombok.*;
import javax.persistence.*;
import java.util.Collection;
import java.util.List;


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

    @ManyToOne
    private Director director;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Genre.class)
    @JoinTable(
            name="movies_genre",
            joinColumns = {@JoinColumn(name = "movies_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="genre_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    private List<Genre> genreList;

    @Column(nullable = false)
    private Long score;

    @Column(nullable = false)
    private String plot;

    @Column(nullable = false)
    private Integer ratingID;

    @Column(nullable = false)
    private String poster;

}
