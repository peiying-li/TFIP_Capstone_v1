package main.repository;

import jakarta.transaction.Transactional;
import main.entities.Inventory;
import main.entities.ItemCondition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {

    @Query("SELECT i FROM Inventory i")
    List<Inventory> findAllItems();

    @Query("SELECT i FROM Inventory i WHERE i.itemCondition.itemConditionId <> null")
    List<Inventory> findAllDonations();

    @Modifying
    @Query("UPDATE Inventory i SET i.typeCategory.catId=:catId, i.ageCategory.ageGrpId=:ageGrpId, i.description=:description where i.inventoryItemId = :id")
    @Transactional
    void updateItem(@Param(value = "id") int id,  @Param(value = "catId") Integer catId, @Param(value = "ageGrpId") Integer ageGrpId,  @Param(value = "description") String description);

    @Modifying
    @Query("UPDATE Inventory i SET i.itemCondition.itemConditionId = :conditionId where i.inventoryItemId = :id")
    @Transactional
    void moveItemToDonation(@Param(value = "id") int id, @Param(value = "conditionId")int itemConditionId);

    @Modifying
    @Query("UPDATE Inventory i SET i.itemCondition.itemConditionId = NULL where i.inventoryItemId = :id")
    @Transactional
    void removeDonation(@Param(value = "id") int id);

    @Modifying
    @Query("UPDATE Inventory i SET i.recipientuser.userId = 1, i.isReserved = 1 where i.inventoryItemId = :id")
    @Transactional
    void reserveDonation(@Param(value = "id") int id);


}
