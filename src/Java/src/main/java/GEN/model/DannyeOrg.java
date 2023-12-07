package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДанныеОрг
 */
@Entity(name = "IISGENДанныеОрг")
@Table(schema = "public", name = "ДанныеОрг")
public class DannyeOrg {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерСтроки")
    private Integer номерстроки;

    @Column(name = "Email")
    private String email;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "ОГРН")
    private Integer огрн;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "ОПФ")
    private String опф;

    @Column(name = "ЮрАдрес")
    private String юрадрес;


    public DannyeOrg() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерСтроки() {
      return номерстроки;
    }

    public void setНомерСтроки(Integer номерстроки) {
      this.номерстроки = номерстроки;
    }

    public String getEmail() {
      return email;
    }

    public void setEmail(String email) {
      this.email = email;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getОГРН() {
      return огрн;
    }

    public void setОГРН(Integer огрн) {
      this.огрн = огрн;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getОПФ() {
      return опф;
    }

    public void setОПФ(String опф) {
      this.опф = опф;
    }

    public String getЮрАдрес() {
      return юрадрес;
    }

    public void setЮрАдрес(String юрадрес) {
      this.юрадрес = юрадрес;
    }


}