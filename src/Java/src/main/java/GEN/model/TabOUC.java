package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТабОУЦ
 */
@Entity(name = "IISGENТабОУЦ")
@Table(schema = "public", name = "ТабОУЦ")
public class TabOUC {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "НомерСтроки")
    private Integer номерстроки;

    @Column(name = "ДатаОконч")
    private String датаоконч;

    @Column(name = "ДатаНач")
    private String датанач;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;


    public TabOUC() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getНомерСтроки() {
      return номерстроки;
    }

    public void setНомерСтроки(Integer номерстроки) {
      this.номерстроки = номерстроки;
    }

    public String getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(String датаоконч) {
      this.датаоконч = датаоконч;
    }

    public String getДатаНач() {
      return датанач;
    }

    public void setДатаНач(String датанач) {
      this.датанач = датанач;
    }


}