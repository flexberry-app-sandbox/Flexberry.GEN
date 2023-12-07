package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТабМенеджер
 */
@Entity(name = "IISGENТабМенеджер")
@Table(schema = "public", name = "ТабМенеджер")
public class TabMenedzher {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПланНаМесяц")
    private Integer планнамесяц;

    @Column(name = "ИтогоЗаГод")
    private Integer итогозагод;

    @Column(name = "НомерСтроки")
    private Integer номерстроки;

    @Column(name = "НаимМесяца")
    private String наиммесяца;

    @Column(name = "РазмерПрод")
    private Integer размерпрод;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public TabMenedzher() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getПланНаМесяц() {
      return планнамесяц;
    }

    public void setПланНаМесяц(Integer планнамесяц) {
      this.планнамесяц = планнамесяц;
    }

    public Integer getИтогоЗаГод() {
      return итогозагод;
    }

    public void setИтогоЗаГод(Integer итогозагод) {
      this.итогозагод = итогозагод;
    }

    public Integer getНомерСтроки() {
      return номерстроки;
    }

    public void setНомерСтроки(Integer номерстроки) {
      this.номерстроки = номерстроки;
    }

    public String getНаимМесяца() {
      return наиммесяца;
    }

    public void setНаимМесяца(String наиммесяца) {
      this.наиммесяца = наиммесяца;
    }

    public Integer getРазмерПрод() {
      return размерпрод;
    }

    public void setРазмерПрод(Integer размерпрод) {
      this.размерпрод = размерпрод;
    }


}