package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТабТовары
 */
@Entity(name = "IISGENТабТовары")
@Table(schema = "public", name = "ТабТовары")
public class TabTovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерСтроки")
    private Integer номерстроки;

    @Column(name = "ПланНаМесяц")
    private Integer планнамесяц;

    @Column(name = "ИтогоЗаГод")
    private Integer итогозагод;

    @Column(name = "РазмерПрод")
    private Integer размерпрод;

    @Column(name = "НаимМесяца")
    private String наиммесяца;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;


    public TabTovary() {
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

    public Integer getРазмерПрод() {
      return размерпрод;
    }

    public void setРазмерПрод(Integer размерпрод) {
      this.размерпрод = размерпрод;
    }

    public String getНаимМесяца() {
      return наиммесяца;
    }

    public void setНаимМесяца(String наиммесяца) {
      this.наиммесяца = наиммесяца;
    }


}