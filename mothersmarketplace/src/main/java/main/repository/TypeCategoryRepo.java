package main.repository;

import main.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeCategoryRepo extends JpaRepository<Inventory, Integer> {
    @Query("SELECT i FROM Inventory i WHERE i.typeCategory.catId=:catId")
    List<Inventory> getItemsByCatId(@Param("catId") Integer catId);

    @Query("SELECT i FROM Inventory i WHERE i.typeCategory.catId=:catId AND i.itemCondition.itemConditionId <> null AND i.isReserved = 0")
    List<Inventory> getDonationsByCatId(@Param("catId") Integer catId);

    @Query("SELECT t.catId FROM TypeCategory t WHERE t.catName =:catName")
    Integer getCatIdByCatName(@Param("catName") String catName);

}
