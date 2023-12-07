package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Номенклатура
 */
@Entity(name = "IISGENНоменклатура")
@Table(schema = "public", name = "Номенклатура")
public class Nomenklatura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодПозиции")
    private Integer кодпозиции;

    @Column(name = "Наименование")
    private String наименование;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzm")
    @Convert("EdIzm")
    @Column(name = "ЕдИзм", length = 16, unique = true, nullable = false)
    private UUID _edizmid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzm", insertable = false, updatable = false)
    private EdIzm edizm;


    public Nomenklatura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодПозиции() {
      return кодпозиции;
    }

    public void setКодПозиции(Integer кодпозиции) {
      this.кодпозиции = кодпозиции;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}