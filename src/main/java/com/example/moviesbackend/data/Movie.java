package com.example.moviesbackend.data;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Director.class)
    @JoinTable(
            name="movies_directors",
            joinColumns = {@JoinColumn(name = "movies_id", nullable = false, updatable = false, referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name="director_id", nullable = false, updatable = false, referencedColumnName = "id")},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("movies")
    private List<Director> director;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Genre.class)
    @JoinTable(
            name="movies_genre",
            joinColumns = {@JoinColumn(name = "movies_id", nullable = false, updatable = false, referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name="genre_id", nullable = false, updatable = false, referencedColumnName = "id")},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("movies")
    private List<Genre> genreList;

    @Column(nullable = false)
    private Float score;

    @Column(nullable = false)
    private String plot;

    @OneToOne
    @PrimaryKeyJoinColumn
    @JsonIgnoreProperties("movies")
    private Rating rating;

    @Column(nullable = false)
    private String poster;

}
