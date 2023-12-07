package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЕдИзм
 */
@Entity(name = "IISGENЕдИзм")
@Table(schema = "public", name = "ЕдИзм")
public class EdIzm {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерСтроки")
    private Integer номерстроки;

    @Column(name = "Единица")
    private String единица;


    public EdIzm() {
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

    public String getЕдиница() {
      return единица;
    }

    public void setЕдиница(String единица) {
      this.единица = единица;
    }


}