# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for dynamic methods in `Mongoid::Document`.
# Please instead update this file by running `bin/tapioca dsl Mongoid::Document`.

module Mongoid::Document
  include GeneratedInstanceMethods

  mixes_in_class_methods ::ActiveModel::Validations::ClassMethods
  mixes_in_class_methods ::ActiveModel::Conversion::ClassMethods
  mixes_in_class_methods ::ActiveModel::API::ClassMethods
  mixes_in_class_methods ::ActiveModel::Model::ClassMethods
  mixes_in_class_methods ::ActiveModel::Serializers::JSON::ClassMethods
  mixes_in_class_methods ::Mongoid::Atomic::ClassMethods
  mixes_in_class_methods ::Mongoid::Changeable::ClassMethods
  mixes_in_class_methods ::Mongoid::Clients::StorageOptions::ClassMethods
  mixes_in_class_methods ::Mongoid::Clients::Options::ClassMethods
  mixes_in_class_methods ::Mongoid::Clients::ClassMethods
  mixes_in_class_methods ::Mongoid::CollectionConfigurable::ClassMethods
  mixes_in_class_methods ::Mongoid::Attributes::Nested::ClassMethods
  mixes_in_class_methods ::Mongoid::Attributes::Readonly::ClassMethods
  mixes_in_class_methods ::Mongoid::Attributes::ClassMethods
  mixes_in_class_methods ::Mongoid::Fields::ClassMethods
  mixes_in_class_methods ::Mongoid::Indexable::ClassMethods
  mixes_in_class_methods ::Mongoid::Matchable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Creatable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Deletable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Destroyable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Incrementable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Logical::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Poppable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Pullable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Pushable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Renamable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Settable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::Unsettable::ClassMethods
  mixes_in_class_methods ::Mongoid::Persistable::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Embedded::Cyclic::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Referenced::AutoSave::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Referenced::CounterCache::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Accessors::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Depending::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Builders::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Macros::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::Reflections::ClassMethods
  mixes_in_class_methods ::Mongoid::Association::ClassMethods
  mixes_in_class_methods ::Mongoid::Scopable::ClassMethods
  mixes_in_class_methods ::Mongoid::Selectable::ClassMethods
  mixes_in_class_methods ::Mongoid::Serializable::ClassMethods
  mixes_in_class_methods ::Mongoid::Shardable::ClassMethods
  mixes_in_class_methods ::Mongoid::Cacheable::ClassMethods
  mixes_in_class_methods ::Mongoid::Threaded::Lifecycle::ClassMethods
  mixes_in_class_methods ::Mongoid::Traversable::ClassMethods
  mixes_in_class_methods ::Mongoid::Validatable::ClassMethods
  mixes_in_class_methods ::Mongoid::Interceptable::ClassMethods
  mixes_in_class_methods ::Mongoid::Copyable::ClassMethods
  mixes_in_class_methods ::Mongoid::Equality::ClassMethods
  mixes_in_class_methods ::Mongoid::Composable::ClassMethods
  mixes_in_class_methods GeneratedClassMethods

  module GeneratedClassMethods
    def __callbacks; end
    def __callbacks=(value); end
    def __callbacks?; end
    def _declared_scopes; end
    def _declared_scopes=(value); end
    def _declared_scopes?; end
    def _validators; end
    def _validators=(value); end
    def _validators?; end
    def aliased_associations; end
    def aliased_associations=(value); end
    def aliased_associations?; end
    def aliased_fields; end
    def aliased_fields=(value); end
    def aliased_fields?; end
    def cyclic; end
    def cyclic=(value); end
    def cyclic?; end
    def default_scoping; end
    def default_scoping=(value); end
    def default_scoping?; end
    def dependents; end
    def dependents=(value); end
    def dependents?; end
    def dependents_owner; end
    def dependents_owner=(value); end
    def dependents_owner?; end
    def discriminator_key; end
    def discriminator_key=(value); end
    def discriminator_key?; end
    def embedded; end
    def embedded=(value); end
    def embedded?; end
    def embedded_relations; end
    def embedded_relations=(value); end
    def embedded_relations?; end
    def fields; end
    def fields=(value); end
    def fields?; end
    def include_root_in_json; end
    def include_root_in_json=(value); end
    def include_root_in_json?; end
    def localized_fields; end
    def localized_fields=(value); end
    def localized_fields?; end
    def nested_attributes; end
    def nested_attributes=(value); end
    def nested_attributes?; end
    def polymorphic; end
    def polymorphic=(value); end
    def polymorphic?; end
    def post_processed_defaults; end
    def post_processed_defaults=(value); end
    def post_processed_defaults?; end
    def pre_processed_defaults; end
    def pre_processed_defaults=(value); end
    def pre_processed_defaults?; end
    def readonly_attributes; end
    def readonly_attributes=(value); end
    def readonly_attributes?; end
    def relations; end
    def relations=(value); end
    def relations?; end
    def storage_options; end
    def storage_options=(value); end
    def storage_options?; end
    def stored_as_associations; end
    def stored_as_associations=(value); end
    def stored_as_associations?; end
  end

  module GeneratedInstanceMethods
    def __callbacks; end
    def __callbacks?; end
    def _declared_scopes; end
    def _declared_scopes=(value); end
    def _declared_scopes?; end
    def _validators; end
    def _validators?; end
    def aliased_associations; end
    def aliased_associations=(value); end
    def aliased_associations?; end
    def aliased_fields; end
    def aliased_fields=(value); end
    def aliased_fields?; end
    def cyclic; end
    def cyclic=(value); end
    def cyclic?; end
    def default_scoping; end
    def default_scoping=(value); end
    def default_scoping?; end
    def dependents; end
    def dependents=(value); end
    def dependents?; end
    def dependents_owner; end
    def dependents_owner=(value); end
    def dependents_owner?; end
    def embedded=(value); end
    def embedded_relations; end
    def embedded_relations=(value); end
    def embedded_relations?; end
    def fields; end
    def fields=(value); end
    def fields?; end
    def include_root_in_json; end
    def include_root_in_json?; end
    def localized_fields; end
    def localized_fields=(value); end
    def localized_fields?; end
    def nested_attributes; end
    def nested_attributes=(value); end
    def nested_attributes?; end
    def polymorphic; end
    def polymorphic=(value); end
    def polymorphic?; end
    def post_processed_defaults; end
    def post_processed_defaults=(value); end
    def post_processed_defaults?; end
    def pre_processed_defaults; end
    def pre_processed_defaults=(value); end
    def pre_processed_defaults?; end
    def readonly_attributes; end
    def readonly_attributes=(value); end
    def readonly_attributes?; end
    def relations; end
    def relations=(value); end
    def relations?; end
    def storage_options; end
    def storage_options?; end
    def stored_as_associations; end
    def stored_as_associations=(value); end
    def stored_as_associations?; end
  end
end
